import * as content from './content.js';
import { SKEPTIC_NOTES } from './skeptic-notes.js';
import { CROSS_FRAMEWORKS, FRAMEWORK_INFO } from './cross-frameworks.js';
import { MUSEUM_EXHIBITS } from './museum-content.js';
import { DEEP_CHAPTERS } from './deep-chapters.js';
import { ui } from './ui.js';
import * as deeper from './deeper.js';

export default {
  content: {
    ...content,
    SKEPTIC_NOTES,
    CROSS_FRAMEWORKS,
    FRAMEWORK_INFO,
    MUSEUM_EXHIBITS,
    DEEP_CHAPTERS
  },
  ui,
  deeper
};
