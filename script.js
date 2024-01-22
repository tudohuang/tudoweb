function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    const age = now - birth;
    const ageInYears = age / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears;
}

function updateAge() {
    const ageElement = document.getElementById("age");
    const age = calculateAge("2007-12-11"); // 例如: "2008-01-01"
    ageElement.textContent = age.toFixed(7); // 保留 7 位小數
}

setInterval(updateAge, 4); // 每秒更新一次

let timeElapsed = 0;

function updateCounter() {
    timeElapsed += 1;
    let randomFactor = Math.floor(Math.random() * 1000); // 產生 0 到 9999 之間的隨機數字
    let attacksCount = timeElapsed * 15000 + randomFactor; // 每秒 1.5 萬次攻擊加上隨機因子

    document.getElementById("time-elapsed").textContent = timeElapsed;
    document.getElementById("attacks-count").textContent = attacksCount.toLocaleString();
}

// 每秒更新一次計數器
setInterval(updateCounter, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const ctfForm = document.getElementById('ctfForm');
    const resultDiv = document.getElementById('result');

    ctfForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const flagInput = document.getElementById('flag');
        const flagValue = flagInput.value.trim();

        // 在這裡添加您的驗證邏輯，檢查 flag 是否正確

        if (flagValue === 'TstyCTF{y0U_f1nd_Me}') {
            resultDiv.textContent = 'Flag 正確！恭喜您完成挑戰。';
        } 
        else if(flagValue === 'TstyCTF{P00rJ5}') {
            resultDiv.textContent = 'Flag 正確！なに!你竟然能找到第二個!';
        } 
        else {
            resultDiv.textContent = 'Flag 不正確。請再試一次。';
        }

        // 清空輸入欄位
        flagInput.value = '';
    });
});


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end; // 確保最終數字是準確的
        }
    };
    window.requestAnimationFrame(step);
}

const numberElements = document.querySelectorAll('.statistic-number');
numberElements.forEach(element => {
    const targetValue = parseInt(element.getAttribute('data-target'), 10);
    animateValue(element, 0, targetValue, 1500); // 持續時間減少至2000毫秒（2秒）
});
