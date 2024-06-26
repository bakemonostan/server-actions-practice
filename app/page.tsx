import Image from "next/image";
import getProjects from "./(auth)/_actions/getProjects";

export default async function Home() {
  const data = await getProjects();
  return (
    <main>
      <h1>Home Page</h1>
      {data?.data?.map((project: any) => (
        <div key={project.id}>
          <h2>{project.project_name}</h2>
        </div>
      ))}
    </main>
  );
}
