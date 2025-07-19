export default defineAppConfig ({
  ui: {
    colors: {
      primary: 'gray'
    },
    dropdownMenu: {
      button: {
        slots: {
          base: 'cursor-pointer'
        }
      },
      slots: {
        item: 'cursor-pointer'
      }
    },
    select: {
      slots: {
        item: 'cursor-pointer'
      }
    },
    selectMenu: {
      slots: {
        item: 'cursor-pointer'
      }
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    },
    navigationMenu: {
      slots: {
        list: 'cursor-pointer'
      }
    }
  }
});
