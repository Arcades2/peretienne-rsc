import Image from "next/image";

export default function CvPage() {
  return (
    <div className="container mx-auto prose dark:prose-invert md:prose-lg print:prose">
      <h2>Experiences</h2>
      <Experience
        company="OncoDNA / Integragen"
        dates="06/2020 - 02/2024"
        localisation="Evry"
        logo={{
          src: "/logo_oncodna.svg",
          alt: "Logo OncoDNA",
        }}
      >
        <p>
          Maintained and enhanced SaaS platforms{" "}
          <a href="https://integragen.com/mercury" target="_blank">
            Mercury
          </a>{" "}
          and{" "}
          <a
            href="https://web.archive.org/web/20221129111314/https://integragen.com/bioinformatics-2/sirius"
            target="_blank"
          >
            Sirius
          </a>
          , specializing in oncological interpretation and rare disease genome
          analysis. Led transition of{" "}
          <a href="https://integragen.com/mercury" target="_blank">
            Mercury
          </a>{" "}
          to React and Symfony API overhaul. Successfully completed migration of{" "}
          <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">
            OncoKDM
          </a>{" "}
          from AngularJS to React. Developed Python/Node.js microservices for
          gene alias retrieval, bioinformatics pipeline automation, etc.
          Proficient in React, PHP, Python, GCP, and microservices architecture,
          with extensive collaboration across development, bioinformatics, and
          DevOps teams.
        </p>
      </Experience>
      <Experience
        company="Place au Cirque"
        dates="02/2018 - 12/2019"
        localisation="Pau"
        logo={{
          src: "/place-au-cirque.png",
          alt: "Place au Cirque logo",
        }}
      >
        <p>
          Developed REST API, back-office, and mobile apps for in-show and
          out-of-show gaming experiences. Features include QR code scanning at
          participating venues for prizes, including circus tickets, and live
          voting during performances. Expanded concept to additional circuses,
          including the International Festival of Massy and the Festival of
          Tours. Utilized Symfony for API, React for back-office, and React
          Native for mobile apps, available on PlayStore and Apple Store. Next
          year, we extended platform to support non-circus partners, revamping
          backend for flexible game modules, improved UX, and augmented reality
          features (Vuforia/Unity). Used Symfony 4 and MongoDB for backend,
          React and AntDesign for back-office, and React Native/Expo for mobile
          apps. Integrated live draw feature with Node.js and Socket.io for
          dynamic quiz experiences.
        </p>
      </Experience>
      <Experience company="Wehub" dates="04/2017 - 02/2018" localisation="Pau">
        <p>
          As an entrepreneur, Wehub, a co-working and web solutions development
          company, became my primary client. Collaborating with 2 developers,
          engaged in numerous WordPress projects and diverse ventures:
        </p>
        <ul>
          <li>
            Visiomusic: Constructed online music lesson platform with video
            conferencing, forum, and classifieds using Symfony, Angular.js,
            Node.js, and OpenTok (WebRTC video conferencing).
          </li>
          <li>
            Solyf: Developed API for association search by name from RNA
            database (National Directory of Associations) with over 1.6 million
            entries, utilizing Node.js, MongoDB, and ElasticSearch.
          </li>
        </ul>
        <p>
          Despite minimal prior experience, quickly assumed central role in
          projects, fostering substantial growth in skills and development
          approach through collaborative work.
        </p>
      </Experience>
    </div>
  );
}

type ExperienceProps = {
  dates: any;
  company: any;
  logo?: React.ComponentProps<typeof Image>;
  localisation: string;
  children: any;
};

function Experience({
  dates,
  company,
  logo,
  localisation,
  children,
}: ExperienceProps) {
  return (
    <div>
      <div className="flex gap-2 items-center h-[80px]">
        <h3 className="!m-0"># {company}</h3>
        {logo && (
          <>
            <span>|</span>
            <Image
              className="!m-0 h-full object-contain object-left"
              height={80}
              width={200}
              {...logo}
            />
          </>
        )}
      </div>
      <span className="text-sm flex gap-4">
        <span>
          📅 <span className="italic">{dates}</span>
        </span>
        <span>
          📍 <span className="italic">{localisation}</span>
        </span>
      </span>
      <div className="h-1 w-full bg-rose-300 my-8" />
      {children}
    </div>
  );
}
