describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Dean","Winchester");
    expect(testContact.firstName).to.equal("Dean");
    expect(testContact.lastName).to.equal("Winchester");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function(){
    var testContact = new Contact("Dead", "Pool");
    expect(testContact.fullName()).to.equal("Dead Pool");
  });

  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
});
