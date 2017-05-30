(function() {
  "use strict"
  angular
    .module("app")
    .component("classifieds", {
      controller: controller,
      templateUrl: "./javascripts/classifieds/classifieds.html",
      bindings: {
        ads: "<"
      }
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
      classifiedsService.posts(vm.ad)
        .then((ad) => {
          vm.classifieds.push(ad)
          delete vm.ad
          $state.reload()
        })
    }

    function toggleEdit(ad) {
      vm.showEdit = vm.showEdit ? !vm.showEdit : true
    }

    function editClassifieds(ad) {
      classifiedsService.patches(ad.id, vm.editad)
        .then((classifieds) => {
          $state.reload()
        })
    }

    function deleteClassifieds(ad) {
      classifiedsService.deletes(ad.id)
        .then((classifieds) => {
          $state.reload()
        })
    }
  }
}())
