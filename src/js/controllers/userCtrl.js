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
