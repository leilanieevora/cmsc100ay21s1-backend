/**
 * This is the home function
 * 
 * @param {*} request
 * @param {*} reply
 * @returns {*} 
 * 
 */

export async function home (request, reply){
  return {
    hello: 'world from home'
  }
};