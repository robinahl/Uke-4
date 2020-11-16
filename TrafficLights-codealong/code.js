function createTrafficLightHtmlFromPhase(phase) {
    // if(phase == 1) return createTrafficLightHtml(true, false, false);
    // if(phase == 2) return createTrafficLightHtml(true, true, false);
    // if(phase == 3) return createTrafficLightHtml(false, false, true);
    // if(phase == 4) return createTrafficLightHtml(false, true, false);
    //return createTrafficLightHtml(phase <= 2, phase == 2 || phase == 4, phase == 3);
    return createTrafficLightHtml(phase <= 2, phase % 2 == 0, phase == 3);
}

function createTrafficLightHtml(isRed, isYellow, isGreen) {
    // Alt 1: inline i HTML lenger ned

    // Alt 2: samme men i egen variabel
    // var redCss = isRed ? 'red' : '';

    // Alt 3: if-setning
    // var redCss;
    // if (isRed) {
    //     redCss = 'red';
    // } else {
    //     redCss = '';
    // }

    return `<div class="trafficLight">
                <div class="light${isRed ? ' red' : ''}"></div>
                <div class="light${isYellow ? ' yellow' : ''}"></div>
                <div class="light${isGreen ? ' green' : ''}"></div>
            </div>`;
}