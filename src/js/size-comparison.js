import BeforeAfter from "before-after-slider";

// Инициализация слайдера
const slider = new BeforeAfter({
  el: document.querySelector(".img-wrapper"), // контейнер с before/after
  before: document.querySelector(".before-wrapper img"), // картинка до
  after: document.querySelector(".after-wrapper img"),  // картинка после
  start: 0.5, // начальная позиция (0.0 = полностью before, 1.0 = полностью after)
  beforeLabel: "", // опционально
  afterLabel: "",  // опционально
  move: true,      // включить drag
});

