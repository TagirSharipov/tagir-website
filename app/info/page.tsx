import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'Keybiz',
    role: 'Senior Front-End Engineer',
    date: 'April 2022 → Present',
    logo: '/keybiz_logo.jpeg',
  },
  {
    company: 'Nexi Digital',
    role: 'Front-End Developer / Contractor',
    date: 'June 2021 → April 2022',
    logo: '/nexi-logo.jpeg',
  },
  {
    company: 'Size4.me SRL',
    role: 'Fullstack Developer',
    date: 'February 2017 → June 2021',
    logo: '/size4me-logo.webp',
  },
  {
    company: 'PolnaKorzina',
    role: 'Front-end Developer',
    date: 'December 2012 → January 2016',
    logo: '/polnakorzina-logo.webp',
  },
  {
    company: 'Deloitte',
    role: 'Senior Consultant',
    date: '2010 → 2012',
    logo: '/deloitte-logo.png',
  },
];

export default async function InfoPage() {

  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi there, I&apos;m Tagir, a seasoned software developer with expertise
          in React and TypeScript, focused on building dynamic, high-performance
          web solutions.
        </p>{' '}
        <p>
          I got into programming back in high school. My first serious project
          was a 2D arcade game written in GW-Basic. After graduating, I earned a
          Master&apos;s degree with honors in Computer Science, specializing in
          Software Development. I then began my career as a programmer, which
          was also interspersed with work in consulting at a Big-4 firm.
        </p>
        <p>
          Most recently, I worked with software development agency to deliver
          modern web applications to the customers. Before that, I was at Nexi
          contributing to building the future of payments. I worked with a
          variety of teams to create a payment management platform for their
          millions of clients.
        </p>
        <p>
          I worked on projects for both large corporations and ambitious
          startups. I am willing to go the extra mile to achieve my goals. For
          example, at one point, I realized that in building ERP systems, I
          lacked knowledge in financial accounting, so I obtained a CPA
          certification to fill that gap.
        </p>
        <p>
          I&apos;m currently open to new opportunities in web application development
          using React and TypeScript. If you&apos;re looking for a committed
          developer to join your team, feel free to reach out: {' '}
          <Link href="mailto:tagir-dev@libero.it">tagir-dev@libero.it</Link>
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
