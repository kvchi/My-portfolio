import { cssLogo, htmlLogo, javaScriptLogo, reactLogo, tailwindcss } from "../assets/Images";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Redux Toolkit", "HTML", "CSS", "Tailwind CSS", "Responsive interface development"],
  },
  {
    title: "Architecture and quality",
    skills: ["Reusable components", "Accessibility", "Responsive images", "Frontend performance", "REST API integration", "Automated testing", "Git and GitHub"],
  },
  {
    title: "Demonstrated full-stack project work",
    skills: ["Node.js", "Express", "Prisma", "SQLite", "Turso / libSQL", "Authentication and authorization", "Transactional email"],
  },
  {
    title: "Delivery and integrations",
    skills: ["Vercel", "Render", "Brevo", "Paystack test-mode integration"],
  },
];

const frontendIcons = [htmlLogo, cssLogo, javaScriptLogo, reactLogo, tailwindcss];

// Heading is supplied by the parent so the embedded and standalone About views keep a logical hierarchy.
// eslint-disable-next-line react/prop-types
export default function ProgressBar({ Heading = "h2" }) {
  return (
    <section aria-labelledby="skills-heading" className="z-10 w-full py-8 sm:py-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <Heading id="skills-heading" className="text-2xl md:text-3xl font-bold text-primary">Skills backed by project work</Heading>
        <div className="hidden sm:flex -space-x-1" aria-hidden="true">
          {frontendIcons.map((icon) => (
            <img key={icon} src={icon} alt="" width="32" height="32" className="w-8 h-8 object-contain bg-white rounded-full p-1 border border-primary/10" />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-lg border border-primary/15 bg-white/50 p-4 sm:p-5">
            <h3 className="font-bold text-primary mb-3">{group.title}</h3>
            <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-full bg-primary/10 text-primary px-3 py-1.5 text-sm font-medium">{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
