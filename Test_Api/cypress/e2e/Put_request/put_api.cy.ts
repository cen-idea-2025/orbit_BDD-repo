
/// <reference types="cypress" />


describe('Making a post request',()=>{
       
   it('Then the response should be valid',()=>{
    
    
    cy.request({
            method: "PUT",
            url: "/student",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
  "student_id": 0,
  "last_name": "last_name",
  "grade_records": [
    {
      "subject_name": "Mathematics",
      "grade": 9.9
    }
  ],
  "first_name": "first_name"
}

}).as("galaxy");

    cy.get("@galaxy").should((res: any)=>{
        expect(res.status).to.equal(405);
        expect(res.body).to.have.property('student_id');
        expect(res.body).to.have.property('last_name');
        expect(res.body).to.have.property('grade_records');
       // expect(res.body).to.have.property("grades");
        expect(res.body).to.have.property('first_name')



    })
    
    
    
   })



})