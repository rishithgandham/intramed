import React from 'react';

const team = [
  {
    name: 'Rishi ',
    role: 'Founder',
    desc: 'Rishi is a sophomore at Henrico High School IB he is the President/ Founder of IntraMed. He enjoys playing tennis and is part of the Henrico Varsity Team playing number 1. Rishi also participates in MUN, TSA and volunteers at a Hospital. Rishi also serves as the secretary of RAMPS at Henrico.',
  },
  {
    name: 'Virinchi',
    role: 'Vice President',
    desc: 'Virinchi is the vice president of Intramed and is a junior at the IB program in Henrico highs school. In his free time, he enjoys playing soccer and playing pickleball. He also loves volunteering at hospitals, and participates in MUN, TSA, and Hosa. ',
  },
  {
    name: 'Mehmet',
    role: 'Secratary',
    desc: 'Mehmet is the secretary of Intramed and is a junior at EHS. He cherishes community service and charity. He enjoys playing videogames and doing sports. Also President of PAC.     ',
  },
  {
    name: 'Shaan',
    role: 'Treasurer',
    desc: ' Shaan is a sophomore at Deep Run High School and is the treasurer of IntraMed. Shaan enjoys studying for the SAT. He enjoys traveling and trying new things. He volunteers at a hospital and has a strong passion for the medical field.    ',
  },

  {
    name: 'Gul',
    role: 'Historian',
    desc: 'Gul is a sophomore at Deep Run High School. Along with being historian of IntraMed, Gul plays field hockey and tennis, she additionally loves to volunteer and has a passion for exploring and traveling the world. She strives to become a doctor in the future.',
  },
  {
    name: 'Aadit',
    role: 'Reporter',
    desc: 'Aadit is a sophomore at Henrico High School.  He is the reporter for Intramed. Aadit enjoys playing basketball and playing sports. He also is interested in the medical field, where he likes to learn new topics and ideas.',
  },
  {
    name: 'Neha',
    role: 'Marketing Manager',
    desc: 'Neha is a sophomore at Deep Run High School. Neha is the Marketing Manager of IntraMed and loves to explore new subjects, especially in the medical field. Neha loves to travel and explore new areas. With her interest in the medical field, she hopes to become a medical healthcare professional in the future.     ',
  },
  {
    name: 'Karan',
    role: 'Communication Manager',
    desc: 'Aadit is a sophomore at Henrico High School.  He is the reporter for Intramed. Aadit enjoys playing basketball and playing sports. He also is interested in the medical field, where he likes to learn new topics and ideas.',
  },
  {
    name: 'Rishith',
    role: 'Webmaster',
    desc: "Rishith is Intramed's Webmaster. He is a freshman at Deep Run High School who enjoys playing sports like basketball, volleyball, and cricket. Rishith loves to learn more about medical topics, and is deeply invested in the medical field ",
  },
  {
    name: 'Avi',
    role: 'Webmaster',
    desc: 'Avi is another Intramed Webmaster and a sophomore at Deep Run High School. Avi enjoys watching sports and is an avid New York Giants fan. He enjoys tennis and hopes to try out for the team this spring. Avi enjoys traveling and describes himself as adventurous. Aside from IntraMed, Avi is involved in MUN, TSA, SASA, and HSO.',
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="bg-transparent ">
        <>
          {' '}
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Our team
              </h2>
              <p className="font-bold text-sm text-gray-500 sm:text-md ">
                The Intramed team consists of enthusiastic aspiring medical
                professionals with a shared goal of making a positive impact in
                healthcare.
              </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10">
              {team.map(({ name, role, desc }) => {
                return (
                  <div key={name} className="text-center text-gray-500 ">
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                      <a href="#">{name}</a>
                    </h3>
                    <p className="font-semibold">{role}</p>
                    <p className="font-bold mt-3 text-sm break-words">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </section>
    </>
  );
}
