import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <h1>Câu hỏi cho Poule de Moule</h1>
            <p>Em có iu Moule hông ?</p>
            <input type={"radio"} value={"yes"} name={"love"} id={"yes_1"}/>
            <label>Có</label><br />
            <input type={"radio"} value={"no"} name={"love"} id={"no_1"}/>
            <label>Không</label>

            <br />

            <p>Moule họ chi -_-</p>
            <input type={"radio"} value={"ngo"} name={"surname"} id={"ngo"}/>
            <label>Ngô</label><br />
            <input type={"radio"} value={"nguyen"} name={"surname"} id={"nguyen"}/>
            <label>Nguyễn -_- </label><br />
            <input type={"radio"} value={"tran"} name={"surname"} id={"tran"}/>
            <label>Trần -_-</label>

            <br /><br />
            Bấm vào nè<br />
            <button type={"submit"} onClick={() => {
                    const yesElem = document.getElementById("yes_1");
                    const noElem = document.getElementById("no_1");
                    const ngoElem = document.getElementById("ngo");
                    const nguyenElem = document.getElementById("nguyen");
                    const tranElem = document.getElementById("tran");
                    if (yesElem.checked && ngoElem.checked) {
                        window.location.href = "/love";
                    } else if (noElem.checked || nguyenElem.checked || tranElem.checked) {
                        window.location.href = "/poule-hu";
                    } else {
                        alert("Chọn đủ nhớ Poulee");
                    }
            }}>Chụttt</button>
        </Fragment>
    );
};

export default Home;