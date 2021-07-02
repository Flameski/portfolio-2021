import React from "react";

const CV = ({ isBg }) => {
  if (isBg) {
    return (
      <section className="experience" id="cv">
        <h2>Моят професионален опит</h2>
        <p>
          От почти десет години се занимавам с управление на съдържание по
          сайтовете на различни компании. Формално досега винаги съм бил част от
          маркетинг екипа, а не от IT/Dev отдела, но моята страст винаги е била
          насочена към създаването на ясни за разбиране и лесни за навигиране
          сайтове и лендинг страници.
        </p>
        <p>
          В професионална среда работя с вече изградени CMS-и, но винаги се
          старая да добавя личен отпечатък към зададените шаблони и да тествам
          границите на възможното със собствени дизайни и доработки.
        </p>
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
          For nearly ten years now I've been managing content on different
          corporate websites. Technically I've always been a part of the
          Marketing team and not the IT/Dev department, but my passion has
          always been creating clear to understand and easy to navigate sites
          and landing pages.
        </p>
        <p>
          Professionally I've been working with CMS's, but I always try to add a
          personal touch to the existing templates and testing the limits of
          what's possible with designs and additions of my own.
        </p>
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
