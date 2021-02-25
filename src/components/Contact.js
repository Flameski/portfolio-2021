import React from 'react';

const Contact = ({ isBg }) => {
  return (
    <section className="contact" id="contact">
      <h2>{isBg ? 'Контакти' : 'Contacts'}</h2>
      <div className="contact-info">
        <p>
          {isBg
            ? 'Ако видяхте нещо интересно и искате да продължим разговора, моля свържете се с мен на'
            : 'If you found something interesting and you want us to continue the conversation, please contact me at'}
        </p>
        <p className="contact-email">
          <a href="mailto:plamen.d@protonmail.com">
            plamen.d [at] protonmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
