import React from 'react'
import { Link } from 'react-router-dom'

const TravelPlan = () => {
  return (
    <div class="container mt-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-column comment-section">
                <div class="">
                    <div class="text-center">
                        <div class="text-center">Leave A Review!</div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text"></p>
                    </div>
                </div>
                
                </div>
                <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start"><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default TravelPlan