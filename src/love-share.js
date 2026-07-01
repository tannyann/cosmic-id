/**
 * 恋愛診断シェアカード(i18n 対応版)
 */
import { getUI } from './i18n/index.js';
import { copyToClipboard, showToast } from './util.js';

const CARD_W = 1080, CARD_H = 1350;
const FONT = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';
const COLORS = {
  bg0:'#06050f', bg1:'#14102a', bg2:'#1f1336',
  gold:'#f0d878', goldDim:'#c9a227', cream:'#ede4d4',
  muted:'#9a8fb8', purple:'#9b6fd4', border:'rgba(232,212,154,0.32)'
};

function roundRect(ctx,x,y,w,h,r){const rad=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rad,y);ctx.arcTo(x+w,y,x+w,y+h,rad);ctx.arcTo(x+w,y+h,x,y+h,rad);ctx.arcTo(x,y+h,x,y,rad);ctx.arcTo(x,y,x+w,y,rad);ctx.closePath();}
function hexA(hex,alpha){if(!hex||hex[0]!=='#'||hex.length<7)return `rgba(155,111,212,${alpha})`;const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return `rgba(${r},${g},${b},${alpha})`;}

function drawBackground(ctx,accent){
  const g=ctx.createLinearGradient(0,0,CARD_W,CARD_H);
  g.addColorStop(0,COLORS.bg0);g.addColorStop(0.5,COLORS.bg1);g.addColorStop(1,COLORS.bg2);
  ctx.fillStyle=g;ctx.fillRect(0,0,CARD_W,CARD_H);
  const a1=ctx.createRadialGradient(CARD_W*0.3,CARD_H*0.3,0,CARD_W*0.3,CARD_H*0.3,CARD_W*0.8);
  a1.addColorStop(0,hexA(accent,0.35));a1.addColorStop(1,'transparent');
  ctx.fillStyle=a1;ctx.fillRect(0,0,CARD_W,CARD_H);
}
function drawFrame(ctx){
  ctx.strokeStyle=COLORS.border;ctx.lineWidth=2;
  roundRect(ctx,48,48,CARD_W-96,CARD_H-96,28);ctx.stroke();
}
function wrapText(ctx,text,maxWidth,size,weight=500){
  ctx.font=`${weight} ${size}px ${FONT}`;
  const chars=[...text];const lines=[];let line='';
  for(const ch of chars){const t=line+ch;if(ctx.measureText(t).width>maxWidth&&line){lines.push(line);line=ch;}else{line=t;}}
  if(line)lines.push(line);return lines;
}

async function renderLoveCardCanvas({ name, result, ctx: birthCtx }){
  if(document.fonts?.ready){try{await document.fonts.ready}catch{}}
  const canvas=document.createElement('canvas');
  canvas.width=CARD_W;canvas.height=CARD_H;
  const ctx=canvas.getContext('2d');
  const { archetype, phase } = result;
  const s = getUI().love.share;

  drawBackground(ctx, archetype.color);
  drawFrame(ctx);
  ctx.textAlign='center';

  ctx.font=`400 26px ${FONT}`;ctx.fillStyle=COLORS.muted;
  ctx.fillText(s.canvasHeader, CARD_W/2, 130);

  ctx.font=`300 48px ${FONT}`;ctx.fillStyle=COLORS.gold;
  ctx.fillText('✦ COSMIC ID ✦', CARD_W/2, 200);

  ctx.font=`400 28px ${FONT}`;ctx.fillStyle=COLORS.cream;
  ctx.fillText(s.canvasSubtitle, CARD_W/2, 250);

  ctx.font=`400 30px ${FONT}`;ctx.fillStyle=COLORS.cream;
  ctx.fillText(name, CARD_W/2, 310);

  ctx.font=`300 180px ${FONT}`;ctx.fillStyle=archetype.color;
  ctx.fillText(archetype.icon, CARD_W/2, 530);

  ctx.font=`300 24px ${FONT}`;ctx.fillStyle=COLORS.muted;
  ctx.fillText(`No. ${archetype.id}`, CARD_W/2, 600);

  const nameLines=wrapText(ctx,archetype.name,CARD_W-200,72,500);
  ctx.font=`500 72px ${FONT}`;ctx.fillStyle=COLORS.cream;
  nameLines.slice(0,2).forEach((line,i)=>ctx.fillText(line, CARD_W/2, 690+i*90));
  const offY=(nameLines.length-1)*90;

  ctx.font=`400 30px ${FONT}`;ctx.fillStyle=archetype.color;
  ctx.fillText(archetype.catch, CARD_W/2, 780+offY);

  const boxY=880+offY;
  roundRect(ctx,120,boxY,CARD_W-240,140,18);
  ctx.fillStyle='rgba(22,18,42,0.7)';ctx.fill();
  ctx.strokeStyle=COLORS.border;ctx.lineWidth=1;
  roundRect(ctx,120,boxY,CARD_W-240,140,18);ctx.stroke();

  ctx.font=`400 22px ${FONT}`;ctx.fillStyle=COLORS.muted;
  ctx.fillText(getUI().love.phaseLabel, CARD_W/2, boxY+50);

  ctx.font=`500 34px ${FONT}`;ctx.fillStyle=COLORS.gold;
  ctx.fillText(phase.label, CARD_W/2, boxY+100);

  ctx.font=`400 22px ${FONT}`;ctx.fillStyle=COLORS.muted;
  const meta=`${birthCtx.sun?.symbol??''} ${birthCtx.sun?.name??''}  ·  Life Path ${birthCtx.lp}`;
  ctx.fillText(meta, CARD_W/2, CARD_H-160);

  ctx.font=`300 22px ${FONT}`;ctx.fillStyle=COLORS.muted;
  ctx.fillText(s.canvasTagline, CARD_W/2, CARD_H-110);

  ctx.font=`400 20px ${FONT}`;ctx.fillStyle=COLORS.goldDim;
  let host='COSMIC ID';try{host=new URL(location.href).host}catch{}
  ctx.fillText(host, CARD_W/2, CARD_H-75);

  return canvas;
}

function tweetText({ name, result }){
  const s = getUI().love.share;
  const url = location.href.split('?')[0].split('#')[0];
  return [
    `${name} — ${result.archetype.icon} ${result.archetype.name}`,
    result.archetype.catch,
    `${getUI().love.phaseLabel}: ${result.phase.label}`,
    '',
    s.tweetCta,
    url,
    s.tweetHashtags
  ].filter(Boolean).join('\n');
}

function safeFilename(name){
  const safe=name.replace(/[^\w぀-ヿ一-龯\-]/g,'').slice(0,16);
  return `cosmic-id-love-${safe}.png`;
}

export async function mountLoveSharePanel({ name, result, ctx: birthCtx }){
  const mount=document.getElementById('love-share-mount');
  if(!mount)return;
  const s = getUI().love.share;

  mount.innerHTML = `
    <div class="share-panel love-share-panel">
      <div class="share-panel-head">
        <h3 class="share-panel-title">${s.panelTitle}</h3>
        <p class="share-panel-desc">${s.panelDesc}</p>
      </div>
      <button type="button" class="share-preview-btn" id="love-share-preview">
        <img id="love-share-img" alt="${name}" width="270" height="338" hidden>
      </button>
      <div class="share-actions">
        <button type="button" class="share-btn share-btn-primary" data-love-share="save">
          <span aria-hidden="true">↓</span> ${s.save}
        </button>
        <button type="button" class="share-btn" data-love-share="x">X</button>
        <button type="button" class="share-btn" data-love-share="line">LINE</button>
        <button type="button" class="share-btn" data-love-share="copy">${s.copy}</button>
      </div>
    </div>
  `;

  let canvas;
  try { canvas = await renderLoveCardCanvas({ name, result, ctx: birthCtx }); }
  catch (err) { console.error('[love-share]',err); showToast(s.imageFail); return; }

  const img=mount.querySelector('#love-share-img');
  img.src=canvas.toDataURL('image/png');
  img.hidden=false;

  const text = tweetText({ name, result });
  mount.querySelectorAll('[data-love-share]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const action=btn.dataset.loveShare;
      try{
        if(action==='save'){
          const a=document.createElement('a');
          a.download=safeFilename(name);a.href=canvas.toDataURL('image/png');a.click();
          showToast(s.saved);
        } else if(action==='x'){
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer,width=550,height=420');
        } else if(action==='line'){
          const url=location.href.split('?')[0].split('#')[0];
          window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,'_blank','noopener,noreferrer');
        } else if(action==='copy'){
          const ok=await copyToClipboard(text);
          showToast(ok?s.copied:s.copyFail);
        }
      }catch(e){ showToast(e.message||s.shareFail); }
    });
  });
}
