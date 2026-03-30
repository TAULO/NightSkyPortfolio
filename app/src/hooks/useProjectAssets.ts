export function useProjectAssets(projectFolderName: string) {
  const modules = import.meta.glob('/public/projects/**/*', { eager: true, as: 'url' });

  return Object.keys(modules)
    .filter((key) => key.includes(`/projects/${projectFolderName}/`))
    .map((key, index) => ({
      src: (modules[key] as string).replace('/public', ''),
      alt: `project-${projectFolderName}-${index}`,
    }));
}