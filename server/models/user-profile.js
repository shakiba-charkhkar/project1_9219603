/**
 * Created by abc on 10/13/2016.
 */
var UserProfileModel = function(cnf) {
    this.email = cnf.email,
        this.firstName = cnf.firstName,
        this.lastName = cnf.lastName
};

module.exports = UserProfileModel;