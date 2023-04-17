function validate(e) {
    const name = document.getElementById('form-name');
    const content = document.getElementById('message-content');
    const replyTo = document.getElementById('form-reply-to');

    const response = document.getElementById('response');
    let res = '';
    let isError = false;

    if (name.value === ''
        || content.value === ''
        || replyTo.value === ''
    ) {
        res = '入力されていないフォームがあります。';
        isError = true;
    } else {
        res = 'お問い合わせありがとうございました。';
    }

    response.textContent = res;
    response.classList.remove(...response.classList);

    if (isError) {
        response.classList.add('error');
        e.preventDefault();
        window.location.href = '#response';
    } else {
        response.classList.add('done');
        window.submitFlag = true;
        const btn = document.getElementById('submit-button');
        btn.classList.add('disable');
    }
}

function submit() {
    console.log('submit()')
    window.location = '#body';
    btn.disabled = 'disabled';
}

window.submitFlag = false;

window.addEventListener('load', () => {
    const btn = document.getElementById('submit-button');
    btn.addEventListener('click', validate, false);
});


