import projects from "@/content/projects/projects.json";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import SpaceBackground from "@/components/SpaceBackground";

export default function ProjectsPage() {
  return (
    <>
      <SpaceBackground />
      <Navbar />
      <div className="navbar-spacer" />
      <main className="projects-page w-full px-6">
        {projects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      </main>
      <Footer />
    </>
  );
}
