/**
 * Feature 12: Comparative Personality — 現代心理学枠組みへの翻訳(日本語)。
 * ライフパス値・太陽星座別に Big Five / MBTI / Enneagram / StrengthsFinder への対応を持つ。
 *
 * 注意:これらの対応は「一般に共通するテーマ」の翻訳であり、
 * 厳密な統計的一致ではありません。 モーダル側で必ずそう明示すること。
 */

export const CROSS_FRAMEWORKS = {
  lifepath: {
    1: { bigFive: '外向性 ↑ / 誠実性 ↑', mbti: 'ENTJ / ESTJ', enneagram: 'Type 8(挑戦者)', strengths: ['指令性', '達成欲'] },
    2: { bigFive: '協調性 ↑ / 神経症傾向 ↑', mbti: 'ISFJ / INFP', enneagram: 'Type 9(調停者)', strengths: ['共感性', '調和性'] },
    3: { bigFive: '外向性 ↑ / 開放性 ↑', mbti: 'ENFP / ESFP', enneagram: 'Type 7(熱中する人)', strengths: ['コミュニケーション', 'ポジティブ'] },
    4: { bigFive: '誠実性 ↑↑ / 開放性 ↓', mbti: 'ISTJ / ISFJ', enneagram: 'Type 1(改革者)', strengths: ['規律性', '責任感'] },
    5: { bigFive: '開放性 ↑ / 誠実性 ↓', mbti: 'ENTP / ESTP', enneagram: 'Type 7(熱中する人)', strengths: ['アダプタビリティ', '好奇心'] },
    6: { bigFive: '協調性 ↑↑ / 誠実性 ↑', mbti: 'ESFJ / ISFJ', enneagram: 'Type 2(援助者)', strengths: ['共感性', '包括性'] },
    7: { bigFive: '開放性 ↑ / 外向性 ↓', mbti: 'INTP / INTJ', enneagram: 'Type 5(調査者)', strengths: ['学習欲', '内省'] },
    8: { bigFive: '誠実性 ↑ / 外向性 ↑', mbti: 'ENTJ / ESTJ', enneagram: 'Type 3(達成者)', strengths: ['達成欲', '目標志向'] },
    9: { bigFive: '協調性 ↑ / 開放性 ↑', mbti: 'INFJ / INFP', enneagram: 'Type 4(個性派)', strengths: ['個別化', '着想'] },
    11: { bigFive: '開放性 ↑↑ / 神経症傾向 ↑', mbti: 'INFJ', enneagram: 'Type 4 / 5', strengths: ['直感', '着想'], note: 'マスター数 11 は 2 と共通のテーマも持つ' },
    22: { bigFive: '誠実性 ↑ / 開放性 ↑', mbti: 'ENFJ / INFJ', enneagram: 'Type 1 / 3', strengths: ['戦略性', '達成欲'], note: 'マスター数 22 は 4 と共通のテーマも持つ' },
    33: { bigFive: '協調性 ↑↑ / 開放性 ↑', mbti: 'INFJ / ENFJ', enneagram: 'Type 2 / 9', strengths: ['共感性', '調和性'], note: 'マスター数 33 は 6 と共通のテーマも持つ' }
  },
  sun: {
    '牡羊座': { bigFive: '外向性 ↑ / 誠実性 →', mbti: 'ESTP / ENTP', enneagram: 'Type 3 / 8', strengths: ['指令性', '活発性'] },
    '牡牛座': { bigFive: '誠実性 ↑ / 神経症傾向 ↓', mbti: 'ISTJ / ISFJ', enneagram: 'Type 6 / 9', strengths: ['規律性', '慎重さ'] },
    '双子座': { bigFive: '外向性 ↑ / 開放性 ↑', mbti: 'ENTP / ENFP', enneagram: 'Type 7', strengths: ['コミュニケーション', '着想'] },
    '蟹座':   { bigFive: '協調性 ↑ / 神経症傾向 ↑', mbti: 'ISFJ / INFP', enneagram: 'Type 2 / 4', strengths: ['共感性', '包括性'] },
    '獅子座': { bigFive: '外向性 ↑↑ / 開放性 ↑', mbti: 'ESFP / ENFJ', enneagram: 'Type 3 / 7', strengths: ['自我', '活発性'] },
    '乙女座': { bigFive: '誠実性 ↑↑', mbti: 'ISTJ / ISFJ', enneagram: 'Type 1', strengths: ['分析思考', '規律性'] },
    '天秤座': { bigFive: '協調性 ↑ / 開放性 ↑', mbti: 'ENFJ / ESFJ', enneagram: 'Type 3 / 9', strengths: ['社交性', '調和性'] },
    '蠍座':   { bigFive: '誠実性 ↑ / 神経症傾向 ↑', mbti: 'INTJ / INFJ', enneagram: 'Type 5 / 8', strengths: ['戦略性', '内省'] },
    '射手座': { bigFive: '外向性 ↑ / 開放性 ↑↑', mbti: 'ENTP / ENFP', enneagram: 'Type 7', strengths: ['学習欲', 'アダプタビリティ'] },
    '山羊座': { bigFive: '誠実性 ↑↑ / 外向性 ↓', mbti: 'ISTJ / ENTJ', enneagram: 'Type 1 / 3', strengths: ['責任感', '目標志向'] },
    '水瓶座': { bigFive: '開放性 ↑↑ / 協調性 →', mbti: 'INTP / ENTP', enneagram: 'Type 5', strengths: ['着想', '未来志向'] },
    '魚座':   { bigFive: '協調性 ↑ / 開放性 ↑', mbti: 'INFP / ISFP', enneagram: 'Type 4 / 9', strengths: ['共感性', '着想'] }
  }
};

export const FRAMEWORK_INFO = {
  bigFive:   { name: 'Big Five', desc: '性格心理学で最も研究された 5 因子モデル(1990 年代確立)。開放性・誠実性・外向性・協調性・神経症傾向の 5 軸で個人差を測定する。' },
  mbti:      { name: 'MBTI', desc: 'ユング理論をベースに Katharine Cook Briggs らが 1940 年代に開発。4 軸 16 タイプに分類。心理学的な妥当性については論争があるが、自己理解の入口として広く使われる。' },
  enneagram: { name: 'エニアグラム', desc: '9 タイプの性格類型。古代の伝統から現代形は 20 世紀後半に体系化。恐れと欲求の観点から動機を捉える。' },
  strengths: { name: 'StrengthsFinder', desc: 'Gallup 社が開発、Don Clifton による 34 資質モデル。「強みに焦点を当てる」心理学の実践的ツール。' }
};
