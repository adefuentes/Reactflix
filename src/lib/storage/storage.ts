
export default (storage: Storage) => ({
	get(k: string) {
		try {
			let item = storage.getItem(k);
			if (!!item) {
				return JSON.parse(item);
			}
			return null;
		}
		catch(e) {
			return null;
		}
	},
	set(k: string, v: {[id: string]: string}) {
		storage.setItem(k, JSON.stringify(v));
	}
});
