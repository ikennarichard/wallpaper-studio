// Check if running in Tauri
export const isTauriApp = 
  typeof window !== 'undefined' && 
  '__TAURI__' in window;

// Window controls
export async function minimizeWindow() {
  if (!isTauriApp) return;
  const { appWindow } = await import('@tauri-apps/api/window');
  await appWindow.minimize();
}

export async function maximizeWindow() {
  if (!isTauriApp) return;
  const { appWindow } = await import('@tauri-apps/api/window');
  await appWindow.toggleMaximize();
}

export async function closeWindow() {
  if (!isTauriApp) return;
  const { appWindow } = await import('@tauri-apps/api/window');
  await appWindow.close();
}

// File operations
export async function saveFile(data: string, filename: string) {
  if (!isTauriApp) {
    console.warn('Tauri not available');
    return;
  }

  const { save } = await import('@tauri-apps/api/dialog');
  const { writeTextFile } = await import('@tauri-apps/api/fs');

  const filePath = await save({
    defaultPath: filename,
    filters: [{
      name: 'JSON',
      extensions: ['json']
    }]
  });

  if (filePath) {
    await writeTextFile(filePath, data);
  }
}

export async function openFile() {
  if (!isTauriApp) return null;

  const { open } = await import('@tauri-apps/api/dialog');
  const { readTextFile } = await import('@tauri-apps/api/fs');

  const selected = await open({
    multiple: false,
    filters: [{
      name: 'Image',
      extensions: ['png', 'jpg', 'jpeg', 'webp']
    }]
  });

  if (selected && typeof selected === 'string') {
    return await readTextFile(selected);
  }
  
  return null;
}