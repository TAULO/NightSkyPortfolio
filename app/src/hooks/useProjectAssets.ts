export function useProjectAssets(projectFolderName: string) {
  const modules = import.meta.glob('/src/assets/static/**/*');

  return Object.keys(modules)
    .filter((key) => key.includes(`/projects/${projectFolderName}/`))
    .map((key, index) => ({
      src: key,
      alt: `project-${projectFolderName}-${index}`,
    }));
}
