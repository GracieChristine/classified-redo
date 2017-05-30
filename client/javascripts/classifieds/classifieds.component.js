(function() {
  "use strict"
  angular
    .module("app")
    .component("classifieds", {
      controller: controller,
      templateUrl: "./javascripts/classifieds/classifieds.html"
    })

  controller.$inject = ["classifiedsService", "$state"]

  function controller(classifiedsService, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.toggleCreate = toggleCreate
    vm.createClassifieds = createClassifieds
    vm.toggleEdit = toggleEdit
    vm.editClassifieds = editClassifieds
    vm.deleteClassifieds = deleteClassifieds

    function onInit() {
      vm.showCreate = false
      classifiedsService.gets()
      .then((classifieds) => {
        vm.classifieds = classifieds
      })
    }

    function toggleCreate() {
      vm.showCreate = vm.showCreate ? !vm.showCreate : true
    }

    function createClassifieds() {
      classifiedsService.posts(vm.post)
        .then((post) => {
          vm.classifieds.push(post)
        })
      delete vm.post
      $state.reload()
      vm.showCreate = false
    }

    function toggleEdit() {
      vm.showEdit = vm.showEdit ? !vm.showEdit : true
    }

    function editClassifieds(post) {
      classifiedsService.patches(post.id, vm.editClassified)
        .then((classifieds) => {})
        $state.reload()
    }

    function deleteClassifieds(post) {
      classifiedsService.deletes(post.id)
        .then((classifieds) => {
          $state.reload()
        })
    }
  }
}())
