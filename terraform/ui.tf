// UI
resource "aws_s3_bucket" "dashvid-io-bucket" {
    bucket = "${var.environment_name}dashvid.io"
    acl = "public-read"
    policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.environment_name}dashvid.io/*",
      "Principal": "*"
    }
  ]
}
EOF
    website {
        index_document = "index.html"

    }
}

output "ui-address" {
    value = "${aws_route53_record.DashCamWeb.fqdn}"
}