(function() {

  angular.module("app")
    .service("classifiedsService",  service)

    service.$inject = ["$http"]
    function service($http) {
      const svm = this
      svm.gets = gets
      svm.posts = posts
      svm.patches = patches
      svm.deletes = deletes

      function gets(id) {
        return $http.get(id ? `/api/classifieds/${id}` : "/api/classifieds")
          .then((classifieds) => {
            return classifieds.data
          })
      }

      function posts(post) {
        return $http.post("/api/classifieds", post)
          .then((classified) => {
            return classified.data
          })
      }


      function patches(id, classified) {
        return $http.patch(`/api/classifieds/${id}`, classified)
          .then((classified) => {
            return classified.data
          })
      }

      function deletes(id) {
        return $http.delete(`/api/classifieds/${id}`)
          .then((classified) => {
            return classified.data
          })
      }
  }

}())
