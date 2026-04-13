export function useProjectAssets(projectFolderName: string) {
  const modules = import.meta.glob('/public/projects/**/*', { eager: true, query: '?url', import: 'default' });

  return Object.keys(modules)
    .filter((key) => key.includes(`/projects/${projectFolderName}/`))
    .map((key, index) => ({
      src: modules[key] as string,
      alt: `project-${projectFolderName}-${index}`,
    }));
}