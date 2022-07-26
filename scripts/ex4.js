const aFigureEx4 = () => {
    const showAFigureEx4 = document.getElementById('showAFigureEx4');
    let figure = ``;
    figure += `<p>(a)</p>
    `;
    // Draws lines
    for(let i=0; i<10; i++) {
        figure += `<p>`;
        // Draws columns
        for(let j=0; j<=i; j++){
            figure += `*`
        }
        figure += `</p>
        `
    }
    showAFigureEx4.innerHTML = figure;
};
const deleteAFigureEx4 = () => {
    showAFigureEx4.innerHTML = ``;
};

const bFigureEx4 = () => {
    const showBFigureEx4 = document.getElementById('showBFigureEx4');
    let figure = ``;
    figure += `<p>(b)</p>
    `;
    // Draws lines
    for(let i=0; i<10; i++) {
        figure += `<p>`;
        // Draws columns
        for(let j=10; j>i; j--){
            figure += `*`
        }
        figure += `</p>
        `
    }
    showBFigureEx4.innerHTML = figure;
};
const deleteBFigureEx4 = () => {
    showBFigureEx4.innerHTML = '';
};

const cFigureEx4 = () => {
    const showCFigureEx4 = document.getElementById('showCFigureEx4');
    let figure = ``;
    figure += `<p>(c)</p>
    `;
    // Draws lines
    let i = 0;
    do {
        figure += `<p>`;
        // Draws columns
        for(let j=0; j<10; j++){
            if(j>=i){
                figure += `*`;
            } else {
                figure += ` `;
            }
        }
        figure += `</p>
        `;
        i++;
    } while (i<10)
    showCFigureEx4.innerHTML = figure;
};
const deleteCFigureEx4 = () => {
    showCFigureEx4.innerHTML = '';
};

const dFigureEx4 = () => {
    const showDFigureEx4 = document.getElementById('showDFigureEx4');
    let figure = ``;
    figure += `<p>(d)</p>
    `;
    // Draws lines
    let i = 0;
    do {
        figure += `<p>`;
        // Draws columns
        for(let j=9; j>=0; j--){
            if(j>i){
                figure += ` `;
            } else {
                figure += `*`;
            }
        }
        figure += `</p>
        `;
        i++;
    } while (i<10)
    showDFigureEx4.innerHTML = figure;
};
const deleteDFigureEx4 = () => {
    showDFigureEx4.innerHTML = '';
};