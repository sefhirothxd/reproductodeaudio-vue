import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cancion: {} && {
			album: {
				cover_medium:
					'https://aclesdonorionelosangeles.github.io/img/avatar.jpg',
			},
			title: 'desconocido',
			artist: {
				name: 'Jhon doe',
			},
			artista: {
				name: 'Jhon doe',
				nb_fan: 1000,
			},
		},
		isPlaying: false,
		player: new Audio(),
		volumen: 0.5,
	},
	mutations: {
		OBTENER_CANCION(state, payload) {
			state.cancion = payload;
		},
		DALE_PLAY(state, payload) {
			state.isPlaying = payload;
			state.player.src = state.cancion.preview;
			state.player.play();
		},
		DALE_PAUSE(state, payload) {
			state.isPlaying = payload;
			state.player.pause();
		},
		VOLUMEN_CONTROLLER(state, payload) {
			state.player.volume = payload;
		},
	},
	actions: {
		guardarCancion({ commit }, payload) {
			commit('OBTENER_CANCION', payload);
		},
		play({ commit }, payload) {
			commit('DALE_PLAY', payload);
		},
		pause({ commit }, payload) {
			commit('DALE_PAUSE', payload);
		},
		subirBajar({ commit }, payload) {
			commit('VOLUMEN_CONTROLLER', payload);
		},
	},
	modules: {},
});
