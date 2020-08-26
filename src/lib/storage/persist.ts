export default function(alt: any, storage: Storage, storageName: string) {
  try {
    alt.bootstrap(storage.get(storageName));
  }
  catch(e) {
    console.error('Failed to bootstrap data', e);
  }

  alt.FinalStore.listen(() => {
    if(!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });
}
