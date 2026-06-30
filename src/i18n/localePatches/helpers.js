/** Lucky compass HTML for locale patch unified.luckyBody */
export function luckyBody(labels, colors, numbers, days, hint) {
  return `<div class="lucky-compass">
     <div class="lucky-row"><span class="lucky-label">${labels.colors}</span>
       ${colors.map(c => `<span class="lucky-chip">${c}</span>`).join('')}</div>
     <div class="lucky-row"><span class="lucky-label">${labels.numbers}</span>
       ${numbers.map(n => `<span class="lucky-chip">${n}</span>`).join('')}</div>
     <div class="lucky-row"><span class="lucky-label">${labels.days}</span>
       ${days.map(d => `<span class="lucky-chip">${d}</span>`).join('')}</div>
     <p class="lucky-hint">${hint}</p>
   </div>`;
}
