export default async function({store, redirect, route}){
  await store.dispatch('currentUser').then(() => {
    if(store.getters['checkCurrentUser'] && route.path !== '/login') return console.log({user: store.getters['getCurrentUserName'], route: route.path})
    if(store.getters['checkCurrentUser'] && route.path === '/login'){
      console.log({user: store.getters['getCurrentUserName'], path: route.path})
      return redirect('/')
    }
    if(!store.getters['checkCurrentUser']){
      console.log({user: store.getters['getCurrentUserName'], path: route.path})
      return redirect('/login')
    }
  })
}
