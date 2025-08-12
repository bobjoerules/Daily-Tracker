
const hourlyGradients = [
"linear-gradient(to right top, #410000, #390413, #2f0a1b, #240f1d, #1a111b, #1a111b, #1a111b, #1a111b, #240f1d, #2f0a1b, #390413, #410000)", // 0
"linear-gradient(to right top, #3c0400, #370316, #31061d, #27081e, #1c0a1b, #1c0a1b, #1c0a1b, #1c0a1b, #27081e, #31061d, #370316, #3c0400)", // 1
"linear-gradient(to right top, #360500, #300219, #2a0720, #20091f, #150a1a, #150a1a, #150a1a, #150a1a, #20091f, #2a0720, #300219, #360500)", // 2
"linear-gradient(to right top, #310600, #2a031c, #24091f, #1a0a20, #100a17, #100a17, #100a17, #100a17, #1a0a20, #24091f, #2a031c, #310600)", // 3
"linear-gradient(to right top, #2c0700, #25031e, #1f0a1d, #150b20, #0b0a16, #0b0a16, #0b0a16, #0b0a16, #150b20, #1f0a1d, #25031e, #2c0700)", // 4
"linear-gradient(to right top, #270700, #1f0420, #190b1c, #0f0b1f, #050a15, #050a15, #050a15, #050a15, #0f0b1f, #190b1c, #1f0420, #270700)", // 5
"linear-gradient(to right top, #0371a5, #32638f, #3f5679, #414a62, #3e3f4d, #3e3f4d, #3e3f4d, #3e3f4d, #414a62, #3f5679, #32638f, #0371a5)", // 6 (day gradient start)
"linear-gradient(to right top, #1a7fae, #3a6f95, #43657d, #415c65, #3b544d, #3b544d, #3b544d, #3b544d, #415c65, #43657d, #3a6f95, #1a7fae)", // 7
"linear-gradient(to right top, #2a8bb5, #466b9c, #4e6583, #4a5b6a, #425154, #425154, #425154, #425154, #4a5b6a, #4e6583, #466b9c, #2a8bb5)", // 8
"linear-gradient(to right top, #3a98bc, #537ca3, #5b768a, #576f71, #4e645a, #4e645a, #4e645a, #4e645a, #576f71, #5b768a, #537ca3, #3a98bc)", // 9
"linear-gradient(to right top, #4aabc3, #6287aa, #698194, #647b7a, #5a6e64, #5a6e64, #5a6e64, #5a6e64, #647b7a, #698194, #6287aa, #4aabc3)", // 10
"linear-gradient(to right top, #5abfcb, #718fae, #788a9d, #738592, #677e82, #677e82, #677e82, #677e82, #738592, #788a9d, #718fae, #5abfcb)", // 11
"linear-gradient(to right top, #6acdd3, #7ca0b3, #839ca6, #7f979f, #749092, #749092, #749092, #749092, #7f979f, #839ca6, #7ca0b3, #6acdd3)", // 12 (midday)
"linear-gradient(to right top, #6acdd3, #7ca0b3, #839ca6, #7f979f, #749092, #749092, #749092, #749092, #7f979f, #839ca6, #7ca0b3, #6acdd3)", // 13
"linear-gradient(to right top, #5abfcb, #718fae, #788a9d, #738592, #677e82, #677e82, #677e82, #677e82, #738592, #788a9d, #718fae, #5abfcb)", // 14
"linear-gradient(to right top, #4aabc3, #6287aa, #698194, #647b7a, #5a6e64, #5a6e64, #5a6e64, #5a6e64, #647b7a, #698194, #6287aa, #4aabc3)", // 15
"linear-gradient(to right top, #3a98bc, #537ca3, #5b768a, #576f71, #4e645a, #4e645a, #4e645a, #4e645a, #576f71, #5b768a, #537ca3, #3a98bc)", // 16
"linear-gradient(to right top, #2a8bb5, #466b9c, #4e6583, #4a5b6a, #425154, #425154, #425154, #425154, #4a5b6a, #4e6583, #466b9c, #2a8bb5)", // 17
"linear-gradient(to right top, #1a7fae, #3a6f95, #43657d, #415c65, #3b544d, #3b544d, #3b544d, #3b544d, #415c65, #43657d, #3a6f95, #1a7fae)", // 18
"linear-gradient(to right top, #0371a5, #32638f, #3f5679, #414a62, #3e3f4d, #3e3f4d, #3e3f4d, #3e3f4d, #414a62, #3f5679, #32638f, #0371a5)", // 19
"linear-gradient(to right top, #2a4661, #4a4f5d, #4a4750, #453d42, #3e3335, #3e3335, #3e3335, #3e3335, #453d42, #4a4750, #4a4f5d, #2a4661)", // 20
"linear-gradient(to right top, #1f2d3d, #37363c, #393336, #362e30, #302927, #302927, #302927, #302927, #362e30, #393336, #37363c, #1f2d3d)", // 21
"linear-gradient(to right top, #141c27, #242829, #272423, #25211f, #211d1a, #211d1a, #211d1a, #211d1a, #25211f, #272423, #242829, #141c27)", // 22
"linear-gradient(to right top, #0a0e13, #131519, #141316, #13110f, #0f0d0b, #0f0d0b, #0f0d0b, #0f0d0b, #13110f, #141316, #131519, #0a0e13)", // 23
];

function setBackgroundBasedOnTime() {
const hour = new Date().getHours();
document.body.style.backgroundImage = hourlyGradients[hour];
}

setBackgroundBasedOnTime();