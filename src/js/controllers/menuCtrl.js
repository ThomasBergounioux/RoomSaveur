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
                title: 'Saumon fumé',
                id: '1',
                desc: 'asperge et au riz',
                description: {
                    text: "Mets festif arrosé d'un jus de citron, servi avec des asperges, du riz, de la crème fraiche et de l'aneth.",
                    ingredients: {
                        kcal: '',
                        lipides: '',
                        prot: ''
                    }
                },
                photo: '',
                actif: true
            }, {
                title: 'Nouilles de blé sautées',
                id: '2',
                desc: 'poulet et crudité',
                description: {
                    text: "Nouilles agrémentées de petits légumes et de viande, arrosé d'une sauce sucrée-salée.",
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                desc: 'au poulet et crudités',
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
                id: '14',
                desc: 'au poulet et crudités',
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
            }, ]
            // console.log(menus)
    });
