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
                    title: 'Saumon fumé à',
                    id: '1',
                    desc : 'l\'asperge et au riz',
                    description: {
                        text: "Mets festif arrosé d'un jus de citron, servi avec des asperges, du riz, de la crème fraiche et de l'aneth.",
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat1.jpg',
                    actif: true
                }, {
                    title: 'Nouilles de blé sautées au',
                    id: '2',
                    desc : 'poulet et crudités',
                    description: {
                        text: "Nouilles agrémentées de petits légumes et de viande, arrosé d'une sauce sucrée-salée.",
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat2.jpg',
                    actif: true
                }, {
                    title: 'Roti de rosbeef Charolais à la',
                    id: '3',
                    desc : 'sauce au Roquefort et aux asperges',
                    description: {
                        text: 'Pièce allongée de boeuf de notre campagne, marié à une sauce au Roquefort, parsemé de persils et d\'aneth.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat3.jpg',
                    actif: true
                }, {
                    title: 'Salade de tomates cerise',
                    id: '4',
                    desc : 'et mozarella',
                    description: {
                        text: 'Salade de tomates cerise au basilic et à la mozzarella italienne.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat4.jpg',
                    actif: true
                }, {
                    title: 'Pâtes sauce aurore',
                    id: '5',
                    desc : 'et ses herbes',
                    description: {
                        text: 'Penne rigate à la sauce aurore avec ses tomates cerise et son basilic',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat5.jpg',
                    actif: true
                }, {
                    title: 'Petit club-sandwich',
                    id: '6',
                    desc : 'fermier',
                    description: {
                        text: 'Des petits club-sandwichs à base de guacamole liée à la mayonnaise citron, de viande hachée à la sauce soja, d\'oeufs durs et de concombres',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat6.jpg',
                    actif: true
                }, {
                    title: 'Spaghetti et viande hachée',
                    id: '7',
                    desc : 'à la milanaise',
                    description: {
                        text: 'Met simple en apparence, qui vous surprendra par ses épices. Un voyage culinaire qui n\'en a pourtant pas l\'air.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat7.jpg',
                    actif: true
                }, {
                    title: 'Salade aux tomates,',
                    id: '8',
                    desc : 'mozzarella et maïs',
                    description: {
                        text: 'Salade minceur aux radis, tomates, mozzarella et maïs',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat8.jpg',
                    actif: true
                }, {
                    title: 'Plateau de sushis au saumon',
                    id: '9',
                    desc : 'avec ses makis',
                    description: {
                        text: 'Plat emblématique de la cuisine japonaise. Tout en simplicité, riz, algue, poisson cru',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat9.jpg',
                    actif: true
                }, {
                    title: 'Club sandwich',
                    id: '00010',
                    desc : 'façon Palace',
                    description: {
                        text: 'Le sandwich des gourmands et des gourmets : tranches de pain de mie grillé, poulet, oeuf dur, tomate et laitue, le tout accompagné de chips de lard',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat10.jpg',
                    actif: true
                }, {
                    title: 'Carottes et patates douces',
                    id: '00011',
                    desc : 'aux épices',
                    description: {
                        text: 'Recette vietnamienne de patates douces, champignons de paille et bourgeons de ciboule',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat11.jpg',
                    actif: true
                }, {
                    title: 'Riz au thon et aux épinards',
                    id: '00012',
                    desc : 'à la cambodgienne',
                    description: {
                        text: 'Simple à première vue, il vous surprendra par ses épinards façon Cambodge',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat12.jpg',
                    actif: true
                }, {
                    title: 'Crevettes façon thaï ',
                    id: '13',
                    desc : 'au lait de coco et curry',
                    description: {
                        text: 'Une sauce à base lait de coco et curry à la fois onctueuse et relevée. La coriandre fraîche permet d\'obtenir un mariage des saveurs à tomber.',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat13.jpg',
                    actif: true
                },
                {
                    title: 'Filet de boeuf',
                    id: '14',
                    desc : 'à la ficelle',
                    description: {
                        text: 'Pièce de boeuf ficellé, au citron, servis avec ses oeufs durs et concombres',
                        ingredients: {
                            kcal: '',
                            lipides: '',
                            prot: ''
                        }
                    },
                    photo: 'dest/img/plat14.jpg',
                    actif: true
                },
            ]
            // console.log(menus)
    });
