import create from 'zustand'


const useUrlStore = create((set) => ({
    urls: [],
    addUrl: (url) => set((state) => ({ urls: [...state.urls, url] }))
}))


export default useUrlStore