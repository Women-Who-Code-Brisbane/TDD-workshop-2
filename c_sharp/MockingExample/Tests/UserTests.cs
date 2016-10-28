using System;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using MovieRentalApp;
using NUnit.Framework;
using Assert = NUnit.Framework.Assert;
using StringAssert = NUnit.Framework.StringAssert;


namespace Tests
{
    [TestFixture]
    public class UserTests {

        [Test]
        public void User_Can_List_All_Movies()
        {
            // this example uses a Stub class
            var service = new MockMovieService();
            var user = new User(service, "John");
            var result = user.getMovies();
            var expected = "[{}]";
            // we test that the service returns the expected string
            // this doesn't tell us if the service was actually called
            // and is only useful to allow us to create the User method without errors
            StringAssert.AreEqualIgnoringCase(expected, result);
        }
        [Test]
        public void User_Can_List_Current_Rentals()
        {
            // this example uses a Mock framework: Moq
            var moqService = new Mock<IMovieService>();
            moqService.Setup(service => service.GetCurrentRentals(It.IsAny<String>())).Returns("[{}]");
            var user = new User(moqService.Object, "Diana");
            var result = user.getCurrentRentals();
            // we test that the service method was called exactly once
            // this ensures that the User method is actually doing the call
            moqService.Verify(service => service.GetCurrentRentals(It.IsAny<String>()), Times.Once);
        }
        [Test]
        public void User_Can_Rent_A_Movie()
        {

        }
    }
}
