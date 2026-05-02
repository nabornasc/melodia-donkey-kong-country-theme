let frase_a = [
"A4:2",
"C5:2",
"E5:4",
"E5:2",
"D5:2",
"C5:4",
"A4:8",
"R:2",
"G4:2",
"A4:4",
"C5:4",
"E5:4",
"D5:2",
"C5:2",
"A4:4",
"G4:8",
"E4:8"
]
let frase_b = [
"A4:2",
"C5:2",
"E5:4",
"A5:4",
"G5:2",
"E5:2",
"D5:4",
"C5:4",
"A4:8",
"R:4",
"E4:4",
"G4:4",
"A4:4",
"C5:4",
"E5:4",
"A5:8",
"G5:4",
"E5:4"
]
let ponte = [
"E5:2",
"E5:2",
"D5:2",
"C5:2",
"A4:4",
"R:4",
"G4:2",
"A4:2",
"C5:4",
"E5:4",
"D5:2",
"C5:2",
"A4:4",
"G4:4",
"A4:4",
"E4:8",
"R:4"
]
let final = [
"A4:4",
"C5:4",
"E5:4",
"A5:4",
"G5:4",
"E5:4",
"D5:4",
"C5:4",
"A4:4",
"G4:4",
"E4:4",
"C4:4",
"A3:16"
]
let melodia = frase_a
    .concat(frase_b)
    .concat(ponte)
    .concat(frase_b)
    .concat(final)
music.setTempo(112)
basic.forever(function () {
    music.startMelody(melodia, MelodyOptions.Once)
    basic.pause(melodia.length * 150)
})
