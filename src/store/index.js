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
