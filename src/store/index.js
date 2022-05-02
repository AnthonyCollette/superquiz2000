import { createStore } from 'vuex'

export default createStore({
	state: {
		questions: [
			{
				enonce:
					"Dans une partie d'Among Us, si, au bout de 30 secondes il y a deux morts, qui est le tueur ?",
				reponses: [
					{
						text: 'Lala',
						good: false,
						id: 'un',
					},
					{
						text: 'Lylianna',
						good: true,
						id: 'deux',
					},
					{
						text: 'Meta',
						good: false,
						id: 'trois',
					},
					{
						text: 'Youma',
						good: false,
						id: 'quatre',
					},
				],
				number: 1,
				commentary:
					"Le seul moyen de lui échapper, c'est d'être en couple avec lui !",
				difficulty: 1,
			},
			{
				enonce: "Dans une partie d'Among Us, faut-il faire confiance à Meta ?",
				reponses: [
					{
						text: 'Oui',
						good: false,
						id: 'un',
					},
					{
						text: 'Non',
						good: true,
						id: 'deux',
					},
				],
				number: 2,
				commentary:
					'Vous savez ce que font deux brosses à dents le 14 juillet ?',
				difficulty: 1,
			},

			{
				enonce:
					"Dans Among Us, si Meta n'est pas une personne de confiance, qui l'est encore moins ?",
				reponses: [
					{
						text: 'Sido',
						good: true,
						id: 'un',
					},
					{
						text: 'Youma',
						good: false,
						id: 'deux',
					},
					{
						text: 'Neikko',
						good: false,
						id: 'trois',
					},
					{
						text: 'Lala',
						good: false,
						id: 'quatre',
					},
				],
				number: 3,
				commentary: "J'l'avais dit de voter Sido...",
				difficulty: 2,
			},
			{
				enonce:
					'Dans une partie de Green Hell, qui a pour habitude de voir ses plaies se nécroser ?',
				reponses: [
					{
						text: 'Amyel',
						good: true,
						id: 'un',
					},
					{
						text: 'Lala',
						good: false,
						id: 'deux',
					},
					{
						text: 'Zerky',
						good: false,
						id: 'trois',
					},
					{
						text: 'Youma',
						good: false,
						id: 'quatre',
					},
				],
				number: 4,
				commentary:
					'Quand je le vois mettre les asticots sur ses plaies, je le soupçonne de prendre du plaisir...',
				difficulty: 3,
			},
			{
				enonce:
					"Dans une partie de Phasmophobia, Neikko a-t-il un 'gameplay Camion' ?",
				reponses: [
					{
						text: 'Oui',
						good: true,
						id: 'un',
					},
					{
						text: 'Non',
						good: false,
						id: 'deux',
					},
				],
				number: 5,
				commentary: 'Il est le seul à ne pas le savoir !',
				difficulty: 1,
			},
		],
		score: 0,
	},
	mutations: {
		goodAnswer: (state, payload) => {
			return (state.score = state.score + 1 * payload.difficulty)
		},
		resetScore: (state) => {
			return (state.score = 0)
		},
	},
	actions: {
		goodAnswer({ commit }) {
			commit('goodAnswer')
		},
		resetScore({ commit }) {
			commit('resetScore')
		},
	},
	modules: {},
})
