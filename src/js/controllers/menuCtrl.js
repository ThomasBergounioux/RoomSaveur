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
