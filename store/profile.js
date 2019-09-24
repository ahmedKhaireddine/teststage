export const state = () => ({
    title: "List Of Profiles",
    list : []
})

export const mutations = {
    add (state, {firstname, lastname, email}){
        state.list.push({
           firstname: firstname,
           lastname: lastname,
           email: email,
        })
    },
    remove (state, { profile }){
        state.list.splice(state.list.indexOf(profile), 1)
    }
}

export const getters = {
    countProfiles: state =>{
        return state.list.length
    } 
}