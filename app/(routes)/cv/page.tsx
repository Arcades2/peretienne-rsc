import Image from "next/image";
import CvNav from "@/app/_components/CvNav";

export default function CvPage() {
  return (
    <div className="container mx-auto">
      <div className="fixed top-[110px]">
        <CvNav />
      </div>
      <div className="container mx-auto prose dark:prose-invert md:prose-lg print:prose">
        <section id="presentation" className="scroll-my-16 cv-sections">
          <h2># Presentation</h2>
          <p>
            With three and a half years&apos; experience at{" "}
            <a href="https://integragen.com/" target="_blank">
              Integragen
            </a>{" "}
            (now{" "}
            <a href="https://oncodna.com/" target="_blank">
              OncoDNA
            </a>
            ), I have made a significant contribution to projects in the field
            of biotechnology. I played a key role in the maintenance and
            enhancement of{" "}
            <a href="https://integragen.com/mercury" target="_blank">
              Mercury
            </a>
            ,{" "}
            <a
              href="https://web.archive.org/web/20221129111314/https://integragen.com/bioinformatics-2/sirius"
              target="_blank"
            >
              Sirius
            </a>{" "}
            and{" "}
            <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">
              OncoKDM
            </a>{" "}
            SaaS, medical tools for oncology interpretation and rare disease
            genome analysis. In particular, I managed Mercury&apos;s transition
            to React, helped redesign its Symfony API, and successfully migrated
            OncoKDM from Angular to React. These experiences have enabled me to
            develop solid skills in full-stack development.
          </p>

          <p>
            Prior to joining Integragen, I worked as a freelancer on a variety
            of projects including mobile applications, storefronts and custom
            solutions.
          </p>

          <p>
            Currently looking for a challenging professional opportunity,
            I&apos;m passionate about web development and particularly enjoy the
            opportunity to interact at all stages of a project. My expertise in
            React and TypeScript enables me to appreciate type-safe
            environments, use React meta-framework (Next.js, Remix, ...), take
            advantage of new features (React Server Components), and libraries
            (tanstack/query, tanstack/router, tRPC, zod, ...). I&apos;m also
            proficient in transitioning to more modern technology stacks, with a
            focus on tailored solutions rather than simply following trends.
          </p>
          <p>
            Attracted by technical challenges and large-scale projects, I&apos;m
            convinced that it&apos;s in these environments that I can fully
            express my potential and bring real added value. I&apos;m looking
            for a dynamic and innovative company, offering a flexible and
            collaborative working environment, where I can continue to develop
            and contribute to innovative projects.
          </p>
        </section>
        <section id="experiences" className="scroll-my-16 cv-sections">
          <h2># Experiences</h2>
          <Experience
            company="OncoDNA / Integragen"
            dates="06/2020 - 02/2024"
            localisation="Evry"
            logo={{
              src: "/logo_oncodna.svg",
              alt: "Logo OncoDNA",
            }}
            tags={[
              "React",
              "MUI",
              "react-query",
              "Symfony",
              "Python",
              "Google Cloud Platform",
              "CICD",
              "FastAPI",
              "Node.js",
              "Docker",
              "ElasticSearch",
              "Jira",
            ]}
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
              , specializing in oncological interpretation and rare disease
              genome analysis. Led transition of{" "}
              <a href="https://integragen.com/mercury" target="_blank">
                Mercury
              </a>{" "}
              to React and Symfony API overhaul. Successfully completed
              migration of{" "}
              <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">
                OncoKDM
              </a>{" "}
              from AngularJS to React. Developed Python/Node.js microservices
              for gene alias retrieval, bioinformatics pipeline automation, etc.
              Proficient in React, PHP, Python, GCP, and microservices
              architecture, with extensive collaboration across development,
              bioinformatics, and DevOps teams.
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
            tags={[
              "React",
              "Symfony",
              "React Native",
              "Expo",
              "MongoDB",
              "Vuforia",
              "Node.js",
              "Socket.io",
            ]}
          >
            <p>
              Developed REST API, back-office, and mobile apps for in-show and
              out-of-show gaming experiences. Features include QR code scanning
              at participating venues for prizes, including circus tickets, and
              live voting during performances. Expanded concept to additional
              circuses, including the International Festival of Massy and the
              Festival of Tours. Utilized Symfony for API, React for
              back-office, and React Native for mobile apps, available on
              PlayStore and Apple Store. Next year, we extended platform to
              support non-circus partners, revamping backend for flexible game
              modules, improved UX, and augmented reality features
              (Vuforia/Unity). Used Symfony 4 and MongoDB for backend, React and
              AntDesign for back-office, and React Native/Expo for mobile apps.
              Integrated live draw feature with Node.js and Socket.io for
              dynamic quiz experiences.
            </p>
          </Experience>
          <Experience
            company="Wehub"
            dates="04/2017 - 02/2018"
            localisation="Pau"
            tags={["Wordpress", "Symfony", "ElasticSearch", "MongoDB"]}
          >
            <p>
              As an entrepreneur, Wehub, a co-working and web solutions
              development company, became my primary client. Collaborating with
              2 developers, engaged in numerous WordPress projects and diverse
              ventures:
            </p>
            <ul>
              <li>
                Visiomusic: Constructed online music lesson platform with video
                conferencing, forum, and classifieds using Symfony, Angular.js,
                Node.js, and OpenTok (WebRTC video conferencing).
              </li>
              <li>
                Solyf: Developed API for association search by name from RNA
                database (National Directory of Associations) with over 1.6
                million entries, utilizing Node.js, MongoDB, and ElasticSearch.
              </li>
            </ul>
            <p>
              Despite minimal prior experience, quickly assumed central role in
              projects, fostering substantial growth in skills and development
              approach through collaborative work.
            </p>
          </Experience>
        </section>
        <section id="contact" className="scroll-my-16 cv-sections">
          <h2># Contact</h2>
          <p>Telephone: 06 37 44 95 13</p>
          <p>Mail: peret.etienne@gmail.com</p>
          <p>
            Github:{" "}
            <a href="https://github.com/Arcades2" target="_blank">
              https://github.com/Arcades2
            </a>
          </p>
          <p>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/etienne-peret" target="_blank">
              https://www.linkedin.com/in/etienne-peret{" "}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

type ExperienceProps = {
  dates: any;
  company: any;
  logo?: React.ComponentProps<typeof Image>;
  localisation: string;
  children: any;
  tags: React.ComponentProps<typeof TagList>["tags"];
};

function Experience({
  dates,
  company,
  logo,
  localisation,
  children,
  tags,
}: ExperienceProps) {
  return (
    <div>
      <div className="flex gap-2 items-center h-[80px]">
        <h3 className="!m-0">## {company}</h3>
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
      <TagList tags={tags} />
      <div className="h-0.5 w-full my-8 border-dashed border-rose-300 border-t-[1px]" />
    </div>
  );
}

type TagListProps = {
  tags: Array<string>;
};

function TagList({ tags }: TagListProps) {
  const colorsWithText = [
    { background: "#80cbc4", text: "#000000" }, // Teal-200
    { background: "#00796b", text: "#ffffff" }, // Teal-700
    { background: "#fce4ec", text: "#333333" }, // Rose-100
    { background: "#f06292", text: "#ffffff" }, // Rose-500
    { background: "#cfd8dc", text: "#333333" }, // Gray-300
    { background: "#757575", text: "#f5f5f5" }, // Gray-600
    { background: "#aed581", text: "#333333" }, // Lime-400
    { background: "#ffd54f", text: "#333333" }, // Yellow-400
    { background: "#42a5f5", text: "#ffffff" }, // Blue-400
    { background: "#7986cb", text: "#f5f5f5" }, // Indigo-300
    { background: "#ab47bc", text: "#f5f5f5" }, // Violet-400
    { background: "#f48fb1", text: "#ffffff" }, // Fuchsia-400
  ];

  const coloredTags = tags.map((tag) => {
    const charCodeSum = tag.split("").reduce((acc, curr) => {
      return acc + curr.charCodeAt(0);
    }, 0);

    const colorIndex = charCodeSum % colorsWithText.length;

    return {
      ...colorsWithText[colorIndex],
      tag,
    };
  });

  return (
    <div className="flex gap-2 flex-wrap">
      {coloredTags.map(({ background, text, tag }) => (
        <div
          key={tag}
          className="py-1 px-2 rounded-full inline text-sm"
          style={{
            background,
            color: text,
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
