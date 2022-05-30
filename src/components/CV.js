import React from "react";

const CV = ({ isBg }) => {
  if (isBg) {
    return (
      <section className="experience" id="cv">
        <h2>Моят професионален опит</h2>
        <p>
          От повече от година съм част професионален софтуерен разработчик.
          Участвал съм в няколко проекта за банкови приложения за клиенти извън
          България.
        </p>
        <p>
          Над десет години се занимавах с управление на съдържание по сайтовете
          на различни компании. В миналото бях част от маркетинг екипа, но моята
          страст винаги е била насочена към създаването на ясни за разбиране и
          лесни за навигиране сайтове и лендинг страници.
        </p>
        <div className="employment">
          <h4>SoftServe</h4>
          <h5>2021 - до сега</h5>
          <h6>Младши разработчик софтуер</h6>
          <ul>
            <li>Front-end разработка с vanilla JavaScript</li>
            <li>Опит с low-code системи (Temenos Quantum / Volt MX)</li>
            <li>Web и mobile front-end с Temenos/Volt/Flutter</li>
          </ul>
        </div>
        <div className="employment">
          <h4>IKEA</h4>
          <h5>2018 - 2021</h5>
          <h6>Специалист уеб маркетинг</h6>
          <ul>
            <li>управление на съдържанието на ikea.bg</li>
            <li>създаване и поддръжка на лендинг и информационни страници</li>
            <li>медийно планиране</li>
            <li>работа по различни дигитални проекти</li>
            <li>комуникация с различни отдели, вкл. международни</li>
          </ul>
        </div>
        <div className="employment">
          <h4>VIVACOM</h4>
          <h5>2012 - 2018</h5>
          <h6>Специалист уеб маркетинг</h6>
          <ul>
            <li>управление на съдържанието на vivacom.bg</li>
            <li>създаване и поддръжка на лендинг и информационни страници</li>
            <li>медийно планиране</li>
            <li>работа по различни дигитални проекти</li>
          </ul>
        </div>
        <div className="employment">
          <h4>PC Mania</h4>
          <h5>2004 - 2009, 2014, 2018 - до настоящия момент</h5>
          <h6>Ревюиращ отшелник</h6>
          <br />
          <p>
            Странично занимание, с което все се събираме и разделяме през
            годините.
          </p>
          <ul>
            <li>управление на съдържанието на pcmania.bg</li>
            <li>създаване на текстови и видео ревюта на игри и хардуер</li>
            <li>управление на редакционен екип</li>
          </ul>
        </div>
        <p>
          Отделно от изброените съм работил по управление на съдържанието на
          други по-малки сайтове.
        </p>
        <h3>Образование</h3>
        <p>
          Не е приложимо към нещата, с които искам да се занимавам. Но имам
          бакалавърска и магистърска степен от български университети, ако има
          значение.
        </p>
      </section>
    );
  } else {
    return (
      <section className="experience" id="cv">
        <h2>My professional experience</h2>
        <p>
          I've been a professional software developer for over a year. I've
          participated in several projects for banking apps for clients outside
          of Bulgaria.
        </p>
        <p>
          I've managed content on different corporate websites for over ten
          years. In the past I've been a part of the Marketing team, but my
          passion has always been creating clear to understand and easy to
          navigate sites and landing pages.
        </p>
        <div className="employment">
          <h4>SoftServe</h4>
          <h5>2021 - now</h5>
          <h6>Junior software developer</h6>
          <ul>
            <li>Front-end development with vanilla JavaScript</li>
            <li>
              Experience with low-code frameworks (Temenos Quantum / Volt MX)
            </li>
            <li>Web and mobile front-end with Temenos/Volt/Flutter</li>
          </ul>
        </div>
        <div className="employment">
          <h4>IKEA</h4>
          <h5>2018 - 2021</h5>
          <h6>Web marketing specialist</h6>
          <ul>
            <li>managing content on ikea.bg</li>
            <li>creating and maintaining landing and info pages</li>
            <li>media planning</li>
            <li>different digital projects</li>
            <li>interdepartmental communication, incl. international</li>
          </ul>
        </div>
        <div className="employment">
          <h4>VIVACOM</h4>
          <h5>2012 - 2018</h5>
          <h6>Web marketing specialist</h6>
          <ul>
            <li>managing content on vivacom.bg</li>
            <li>creating and maintaining landing and info pages</li>
            <li>media planning</li>
            <li>different digital projects</li>
          </ul>
        </div>
        <div className="employment">
          <h4>PC Mania</h4>
          <h5>2004 - 2009, 2014, 2018 - currently</h5>
          <h6>Roaming reviewer</h6>
          <br />
          <p>
            A side project that I keep picking up and dropping throughout the
            years.
          </p>
          <ul>
            <li>managing content on pcmania.bg</li>
            <li>creating text and video reviews of games and hardware</li>
            <li>managing an editorial team</li>
          </ul>
        </div>
        <p>Additionally I've managed content on other smaller sites.</p>
        <h3>Education</h3>
        <p>
          Not applicable to what I want to do. I do however have a bachelors and
          masters degrees from Bulgarian universities, if that's important.
        </p>
      </section>
    );
  }
};

export default CV;
