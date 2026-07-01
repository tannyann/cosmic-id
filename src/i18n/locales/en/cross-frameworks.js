/**
 * Feature 12: Comparative Personality — mapping to modern frameworks (English).
 */

export const CROSS_FRAMEWORKS = {
  lifepath: {
    1: { bigFive: 'Extraversion ↑ / Conscientiousness ↑', mbti: 'ENTJ / ESTJ', enneagram: 'Type 8 (Challenger)', strengths: ['Command', 'Achiever'] },
    2: { bigFive: 'Agreeableness ↑ / Neuroticism ↑', mbti: 'ISFJ / INFP', enneagram: 'Type 9 (Peacemaker)', strengths: ['Empathy', 'Harmony'] },
    3: { bigFive: 'Extraversion ↑ / Openness ↑', mbti: 'ENFP / ESFP', enneagram: 'Type 7 (Enthusiast)', strengths: ['Communication', 'Positivity'] },
    4: { bigFive: 'Conscientiousness ↑↑ / Openness ↓', mbti: 'ISTJ / ISFJ', enneagram: 'Type 1 (Reformer)', strengths: ['Discipline', 'Responsibility'] },
    5: { bigFive: 'Openness ↑ / Conscientiousness ↓', mbti: 'ENTP / ESTP', enneagram: 'Type 7 (Enthusiast)', strengths: ['Adaptability', 'Ideation'] },
    6: { bigFive: 'Agreeableness ↑↑ / Conscientiousness ↑', mbti: 'ESFJ / ISFJ', enneagram: 'Type 2 (Helper)', strengths: ['Empathy', 'Includer'] },
    7: { bigFive: 'Openness ↑ / Extraversion ↓', mbti: 'INTP / INTJ', enneagram: 'Type 5 (Investigator)', strengths: ['Learner', 'Intellection'] },
    8: { bigFive: 'Conscientiousness ↑ / Extraversion ↑', mbti: 'ENTJ / ESTJ', enneagram: 'Type 3 (Achiever)', strengths: ['Achiever', 'Focus'] },
    9: { bigFive: 'Agreeableness ↑ / Openness ↑', mbti: 'INFJ / INFP', enneagram: 'Type 4 (Individualist)', strengths: ['Individualization', 'Ideation'] },
    11: { bigFive: 'Openness ↑↑ / Neuroticism ↑', mbti: 'INFJ', enneagram: 'Type 4 / 5', strengths: ['Intuition', 'Ideation'], note: 'Master number 11 shares themes with 2.' },
    22: { bigFive: 'Conscientiousness ↑ / Openness ↑', mbti: 'ENFJ / INFJ', enneagram: 'Type 1 / 3', strengths: ['Strategic', 'Achiever'], note: 'Master number 22 shares themes with 4.' },
    33: { bigFive: 'Agreeableness ↑↑ / Openness ↑', mbti: 'INFJ / ENFJ', enneagram: 'Type 2 / 9', strengths: ['Empathy', 'Harmony'], note: 'Master number 33 shares themes with 6.' }
  },
  sun: {
    'Aries':       { bigFive: 'Extraversion ↑ / Conscientiousness →', mbti: 'ESTP / ENTP', enneagram: 'Type 3 / 8', strengths: ['Command', 'Activator'] },
    'Taurus':      { bigFive: 'Conscientiousness ↑ / Neuroticism ↓', mbti: 'ISTJ / ISFJ', enneagram: 'Type 6 / 9', strengths: ['Discipline', 'Deliberative'] },
    'Gemini':      { bigFive: 'Extraversion ↑ / Openness ↑', mbti: 'ENTP / ENFP', enneagram: 'Type 7', strengths: ['Communication', 'Ideation'] },
    'Cancer':      { bigFive: 'Agreeableness ↑ / Neuroticism ↑', mbti: 'ISFJ / INFP', enneagram: 'Type 2 / 4', strengths: ['Empathy', 'Includer'] },
    'Leo':         { bigFive: 'Extraversion ↑↑ / Openness ↑', mbti: 'ESFP / ENFJ', enneagram: 'Type 3 / 7', strengths: ['Self-Assurance', 'Activator'] },
    'Virgo':       { bigFive: 'Conscientiousness ↑↑', mbti: 'ISTJ / ISFJ', enneagram: 'Type 1', strengths: ['Analytical', 'Discipline'] },
    'Libra':       { bigFive: 'Agreeableness ↑ / Openness ↑', mbti: 'ENFJ / ESFJ', enneagram: 'Type 3 / 9', strengths: ['Woo', 'Harmony'] },
    'Scorpio':     { bigFive: 'Conscientiousness ↑ / Neuroticism ↑', mbti: 'INTJ / INFJ', enneagram: 'Type 5 / 8', strengths: ['Strategic', 'Intellection'] },
    'Sagittarius': { bigFive: 'Extraversion ↑ / Openness ↑↑', mbti: 'ENTP / ENFP', enneagram: 'Type 7', strengths: ['Learner', 'Adaptability'] },
    'Capricorn':   { bigFive: 'Conscientiousness ↑↑ / Extraversion ↓', mbti: 'ISTJ / ENTJ', enneagram: 'Type 1 / 3', strengths: ['Responsibility', 'Focus'] },
    'Aquarius':    { bigFive: 'Openness ↑↑ / Agreeableness →', mbti: 'INTP / ENTP', enneagram: 'Type 5', strengths: ['Ideation', 'Futuristic'] },
    'Pisces':      { bigFive: 'Agreeableness ↑ / Openness ↑', mbti: 'INFP / ISFP', enneagram: 'Type 4 / 9', strengths: ['Empathy', 'Ideation'] }
  }
};

export const FRAMEWORK_INFO = {
  bigFive:   { name: 'Big Five', desc: 'The most-studied five-factor personality model in psychology (established in the 1990s). Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.' },
  mbti:      { name: 'MBTI', desc: 'Developed by Katharine Cook Briggs and Isabel Briggs Myers starting in the 1940s, drawing on Jung. Sorts people across 4 axes into 16 types. Its scientific validity is contested but it is widely used as an entry point to self-understanding.' },
  enneagram: { name: 'Enneagram', desc: 'A nine-type personality classification. Its modern form was systematized in the late 20th century. Frames motivation through core fears and desires.' },
  strengths: { name: 'CliftonStrengths', desc: 'Developed by Don Clifton at Gallup. 34 talent themes, tool for strengths-based psychology.' }
};
