import { SetStorageItemProps } from './types';

const APP_KEY = 'TO.DO-VITE';

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') {
    return;
  }

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  return JSON.parse(data!);
}
export function setStorageItem({ key, value }: SetStorageItemProps) {
  if (typeof window === 'undefined') {
    return;
  }

  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
