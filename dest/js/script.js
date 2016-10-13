'use strict';

var roomApp = angular.module('roomApp', ['ui.router']);

roomApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
    .state('menu', {
        url: '/menu',
        templateUrl: 'menu.html',
        controller: 'menuCtrl'
    })
    .state('user', {
        url: '/user',
        templateUrl: 'user.html',
        controller: 'userCtrl'
    })
    .state('timeline', {
        url: '/timeline',
        templateUrl: 'timeline.html',
        controller: 'menuCtrl'
    })

    .state('error', {
        url: '/404',
        templateUrl: 'error.html'
    });
});

'use strict';

angular.module('roomApp')
    .controller('menuCtrl', function($scope) {
        console.log('ok');
        $scope.toto = 'frfrfr';

        $scope.days = [
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi',
            'dimanche'
        ]

        $scope.menus = [{
                    title: 'Grande planche italienne végétarienne',
                    id: '1',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '2',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '3',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '4',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '5',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '6',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '7',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '8',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '9',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '00010',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '00011',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Grande planche italienne végétarienne',
                    id: '00012',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                }, {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '13',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                },
                {
                    title: 'Bœuf cuisson douce et caponata',
                    id: '14',
                    desc : 'au poulet et crudités',
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates accusamus excepturi vel iusto omnis, veritatis similique itaque fugit corrupti, vitae, a aperiam est facere iure. Doloremque asperiores illo dolores iure.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: '',
                    actif: true
                },
            ]
            // console.log(menus)
    });


angular.module('roomApp')
	.controller('timelineCtrl', function() {

		console.log(menus)
	})
'use strict';

angular.module('roomApp')
    .controller('userCtrl', function($scope) {
        $scope.users = [{
            id: '45455',
            name: 'Adam',
            lastname: 'Haddadi',
            telephone: '06 45 25 36 45',
            email: 'adam.haddadi@hetic.net',
            password: 'ergjerg4ege5gego<FRjger',
            adresse: {
                numero: '25',
                rue: 'Vincennes Ducoin',
                zipcode: '75018',
                more: '15ème étage'
            },
            commandes: {
                inprogress: {
                    id: '',
                },
                historique: [
                    '124512',
                    '784687',
                    '466789'
                ]
            },
            favoris: [
                'menu2',
                'menu7',
                'menu1'
            ],
            paiement: {
                code: '0123 1012 3456 7890',
                expire: {
                    day: '05',
                    month: '12'
                }
            }
        }, {
            id: '45651',
            name: 'René',
            lastname: 'Gogh',
            telephone: '06 45 25 36 45',
            email: 'rene.gogh@hetic.net',
            password: 'ergjerg4ege5gego<FRjger',
            adresse: {
                numero: '54',
                rue: 'Dechope',
                zipcode: '75018',
                more: '11ème étage'
            },
            commandes: {
                inprogress: {
                    id: '124518'
                },
                historique: []
            },
            favoris: [
                'menu2',
                'menu5',
            ],
            paiement: {
                code: '0123 1012 3456 7890',
                expire: {
                    day: '12',
                    month: '05'
                }
            }
        }]
    });

roomApp.service('login', [function() {
	console.log('riririri')
    this.getUsers = function() {
    	var users = 'user1, user2';
    	console.log('ok');
    }
}]);
