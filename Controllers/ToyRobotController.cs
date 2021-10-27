using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyRobot.Services.Interface;
using ToyRobot.Services.Models;

namespace ToyRobot.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ToyRobotController : ControllerBase
    {
        private readonly IToyRobotService _toyRobotService;
        private readonly ILogger<ToyRobotController> _logger;

        public ToyRobotController(IToyRobotService toyRobotService, ILogger<ToyRobotController> logger)
        {
            _toyRobotService = toyRobotService;
            _logger = logger;
        }

        [HttpPost(Name = "Place")]
        public Position Place(Position position) 
        {
            var newPosition = new Position();

            try
            {
                newPosition = _toyRobotService.PlaceRobot(position);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error: {nameof(Place)}", e.Message);
                throw;
            }

            return newPosition;
        }

        [HttpPost(Name = "Move")]
        public Position Move(Position position)
        {
            var newPosition = new Position();

            try
            {
                newPosition = _toyRobotService.MoveRobot(position);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error: {nameof(Move)}", e.Message);
                throw;
            }

            return newPosition;
        }

        [HttpPost(Name = "Left")]
        public Position Left(Position position)
        {
            var newPosition = new Position();

            try
            {
                newPosition = _toyRobotService.MoveLeft(position);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error: {nameof(Left)}", e.Message);
                throw;
            }

            return newPosition;
        }

        [HttpPost(Name = "Right")]
        public Position Right(Position position)
        {
            var newPosition = new Position();

            try
            {
                newPosition = _toyRobotService.MoveRight(position);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error: {nameof(Right)}", e.Message);
                throw;
            }

            return newPosition;
        }
    }
}
