import {ref} from "vue";
import {useStore} from "vuex";

export const useProduct = (initial = false) => {
    const loading = ref<boolean>(initial);
    const store = useStore();
    const getProducts = () => {
        loading.value = true;
        store.dispatch('getProducts')
            .then(() => loading.value = false)
            .catch(() => loading.value = false);
    }

    return {loading, getProducts}
}